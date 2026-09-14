
// Import Angular's directive decorator.
import { Directive, ElementRef, OnDestroy, AfterViewInit, inject } from '@angular/core';

// Import a helper that tells us whether we're running in a browser.
import { isPlatformBrowser } from '@angular/common';

// Import the token that tells us what platform Angular is running on.
import { PLATFORM_ID } from '@angular/core';


// @Directive tells Angular that this class is an Angular directive.
@Directive({
  // This means we can use the directive like: <div appFadeIn>
  selector: '[appFadeIn]',

  // Modern Angular directives are standalone by default in newer Angular versions.
  standalone: true
})
export class FadeInDirective implements AfterViewInit, OnDestroy {

  // inject() is the modern Angular way of getting dependencies.
  // ElementRef gives us access to the HTML element this directive is attached to.
  private el = inject(ElementRef<HTMLElement>);

  // Get the current platform (browser, server, etc.).
  private platformId = inject(PLATFORM_ID);

  // Store our IntersectionObserver so we can clean it up later.
  private observer?: IntersectionObserver;


  // ngAfterViewInit runs after Angular has created the element in the DOM.
  ngAfterViewInit(): void {

    // Add the initial Tailwind classes.
    //
    // opacity-0:
    //      Element starts invisible.
    //
    // translate-y-6:
    //      Element starts slightly below its final position.
    //
    // transition-all:
    //      Animate changes to these properties.
    //
    // duration-700:
    //      Animation takes 700ms.
    //
    // ease-out:
    //      Animation starts quickly and slows down toward the end.
    this.el.nativeElement.classList.add(
      'opacity-0',
      'translate-y-6',
      'transition-all',
      'duration-700',
      'ease-out'
    );


    // IntersectionObserver only exists in a browser.
    //
    // Angular can also render your application on the server when using SSR.
    // The server does not have IntersectionObserver.
    //
    // Therefore, stop here if we're not running inside a browser.
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }


    // Create an IntersectionObserver.
    //
    // The callback runs whenever the visibility of the element changes.
    this.observer = new IntersectionObserver(([entry]) => {

      // isIntersecting is true when the element has entered the viewport.
      if (entry.isIntersecting) {

        // Remove the classes representing the starting state.
        this.el.nativeElement.classList.remove(
          'opacity-0',
          'translate-y-6'
        );


        // Add the classes representing the final state.
        //
        // opacity-100:
        //      Element becomes completely visible.
        //
        // translate-y-0:
        //      Element moves to its normal position.
        this.el.nativeElement.classList.add(
          'opacity-100',
          'translate-y-0'
        );


        // Stop watching the element.
        //
        // This means the animation happens only once.
        // If you want it to fade in every time you scroll away
        // and back, remove this line.
     //   this.observer?.unobserve(this.el.nativeElement);
      } else {
        // Now we are going to do the opposite so we always get a fade
          this.el.nativeElement.classList.add(
          'opacity-0',
          'translate-y-6'
        );
         this.el.nativeElement.classList.remove(
          'opacity-100',
          'translate-y-0'
        );
      }

    }, {

      // The observer triggers when approximately 10% of the
      // element has entered the viewport.
      threshold: 0.1
    });


    // Tell the IntersectionObserver which element to watch.
    this.observer.observe(this.el.nativeElement);
  }


  // ngOnDestroy runs when Angular removes the directive/component.
  ngOnDestroy(): void {

    // Stop observing the element.
    //
    // This prevents the observer from hanging around after
    // the element has been destroyed.
    this.observer?.disconnect();
  }
}

