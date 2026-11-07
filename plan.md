Upgrade my existing portfolio website with a **3D Infinite Circular Image Carousel**, inspired by the reference image I provided.

Website: https://subhajit-portfolio-dzv6.onrender.com/

### 1. Core Design — Very Important

I want a cinematic 3D horizontal image showcase, NOT a traditional image slider or image grid.

The carousel must display exactly **3 images simultaneously**:

- Center: One large, prominent image facing directly toward the viewer.
- Left: One image slightly rotated inward with a perspective effect.
- Right: One image slightly rotated inward with a perspective effect.

The center image should be visually dominant, while the left and right images should appear slightly smaller and positioned behind the center image.

Create a premium, cinematic, immersive presentation similar to the reference screenshot.

### 2. Infinite Circular Navigation

The carousel must behave like an infinite circular gallery.

- Scrolling down or using the mouse wheel should advance the carousel.
- Scrolling up should move it backward.
- Support click-and-drag navigation.
- Support touch swipe gestures on mobile.
- Support left/right keyboard navigation.
- When navigating, the images should smoothly change their positions.
- The next image should move into the center position.
- The previous center image should move to the left or right position.
- The carousel must loop infinitely without reaching an empty end.
- Avoid abrupt jumps or flickering when looping.

### 3. 3D Visual Effects

Implement:
- CSS perspective and 3D transforms.
- Subtle Y-axis rotation for side images.
- Different image scales based on their positions.
- Depth-based positioning using translateZ.
- Smooth transitions with Framer Motion or the existing animation library.
- Appropriate opacity and depth differences for side images.
- A polished cinematic appearance.

The center image should remain sharp and prominent. Side images should retain their visibility without being excessively dark or blurred.

### 4. Image Handling — Currently Only 2 Photos

I currently have only 2 personal photos.

Important:
- Make the carousel work with just 2 unique images.
- Repeat the available images in the carousel sequence when necessary to fill the 3 visible positions.
- Do not generate fake personal images.
- Do not leave empty spaces.
- Build the component to support 5, 10, 20 or more images later.
- Keep image paths in a single easily editable array/configuration.
- I will upload additional images later.

### 5. Layout and Responsiveness

- Make the carousel wide and visually immersive.
- Maintain appropriate spacing between images.
- Keep all 3 images visible on desktop.
- Adapt image sizes and perspective on tablets and mobile.
- Preserve swipe functionality on mobile.
- Prevent horizontal page overflow.
- Maintain the existing portfolio's color palette and design language.

### 6. Interaction Details

- Mouse wheel navigation should feel natural.
- Prevent excessive navigation when the mouse wheel is used.
- Add smooth transition timing and easing.
- Avoid accidental page scrolling while interacting with the carousel, without blocking normal page scrolling elsewhere.
- Provide a subtle visual indication that the carousel is interactive.

### 7. Technical Requirements

- First inspect my existing project and identify the current image component.
- Integrate this carousel into the most appropriate existing location.
- Reuse existing dependencies and animation libraries.
- Do not rebuild the portfolio.
- Do not remove existing content or functionality.
- Keep the implementation reusable and maintainable.
- Avoid unnecessary dependencies.

### Final Expected Experience

I want exactly 3 images visible at a time, arranged in a cinematic 3D perspective.

As the visitor scrolls, swipes or drags, the images should continuously circulate, with each image taking its turn in the center position.

The experience should feel like a premium interactive photography gallery, not a standard website carousel.

Use my uploaded reference screenshot as the primary visual direction.