//social media
const socialMedia = document.querySelector('.social-media');

  function toggleSocialMedia() {
    const scrollPosition = window.scrollY || window.pageYOffset;
    if (scrollPosition > 300) {
      socialMedia.classList.add('show');
    } else {
      socialMedia.classList.remove('show');
    }
  }

  window.addEventListener('scroll', toggleSocialMedia);



// Hamburger Menu Toggle
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('show');
  menuIcon.classList.toggle('active');
});


// Parallax Effect (Using Vanilla JavaScript)
// Retrieve the parallax elements
const parallaxElements = document.querySelectorAll('.parallax');

// Define and initialize previousScrollPosition variable
let previousScrollPosition = 0;

// Add scroll event listener
window.addEventListener('scroll', function() {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;

  // Loop through each parallax element
  parallaxElements.forEach(function(element) {
    // Get the speed of the element
    const speed = parseFloat(element.dataset.speed);

    // Define the scroll direction (default is -1)
    let scrollDirection = -1;

    // Check the scroll direction based on the difference between current and previous scroll positions
    if (scrollPosition > previousScrollPosition) {
      scrollDirection = 1; // User is scrolling down
    } else if (scrollPosition < previousScrollPosition) {
      scrollDirection = -1; // User is scrolling up
    }

    // Calculate the new background position
    const backgroundPositionY = Math.max(0, Math.min(50, scrollPosition * speed * scrollDirection)) + '%';

    // Set the background position
    element.style.backgroundPositionY = backgroundPositionY;
  });

  // Update the previous scroll position
  previousScrollPosition = scrollPosition;
});


// Smooth Scrolling
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    navbar.classList.remove('show');
    menuIcon.classList.remove('active');
  });
});

//Cursor Effect
document.addEventListener('DOMContentLoaded', function() {
  const cursor = document.getElementById('cursor');
  const links = document.querySelectorAll('a, button, .icon');
  const serviceItems = document.querySelectorAll('.service-list');
  const contactBtn = document.querySelector('.btn-contact');
  const rainbowBtn = document.querySelector('.btn-rainbow');
  const blogArrows = document.querySelectorAll('.arrow');

  document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    cursor.style.transform = `translate(-50%, -50%) translateZ(0)`;
    cursor.style.visibility = 'visible';
  });

  links.forEach(function(link) {
    link.addEventListener('mouseover', function() {
      cursor.style.backgroundImage = "url('media/uni-action.png')";
      document.body.style.cursor = 'none';
      link.style.cursor = 'none';
    });

    link.addEventListener('mouseout', function() {
      cursor.style.backgroundImage = "url('media/uni-point.png')";
      document.body.style.cursor = 'none';
      link.style.cursor = 'none';
    });
  });

  serviceItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      cursor.style.backgroundImage = "url('media/uni-money.png')";
      document.body.style.cursor = 'none';
      item.style.cursor = 'none';
    });

    item.addEventListener('mouseout', function() {
      cursor.style.backgroundImage = "url('media/uni-point.png')";
      document.body.style.cursor = 'none';
      item.style.cursor = 'none';
    });
  });

  contactBtn.addEventListener('mouseover', function() {
    cursor.style.backgroundImage = "url('media/uni-contact.png')";
    document.body.style.cursor = 'none';
    contactBtn.style.cursor = 'none';
  });

  contactBtn.addEventListener('mouseout', function() {
    cursor.style.backgroundImage = "url('media/uni-point.png')";
    document.body.style.cursor = 'none';
    contactBtn.style.cursor = 'none';
  });

  rainbowBtn.addEventListener('mouseover', function() {
    cursor.style.backgroundImage = "url('media/uni-rainbow.png')";
    document.body.style.cursor = 'none';
    rainbowBtn.style.cursor = 'none';
  });

  rainbowBtn.addEventListener('mouseout', function() {
    cursor.style.backgroundImage = "url('media/uni-point.png')";
    document.body.style.cursor = 'none';
    rainbowBtn.style.cursor = 'none';
  });

  blogArrows.forEach(function(arrow) {
    arrow.addEventListener('mouseover', function() {
      cursor.style.backgroundImage = "url('media/uni-blog.png')";
      document.body.style.cursor = 'none';
      arrow.style.cursor = 'none';
    });

    arrow.addEventListener('mouseout', function() {
      cursor.style.backgroundImage = "url('media/uni-point.png')";
      document.body.style.cursor = 'none';
      arrow.style.cursor = 'none';
    });
  });

  document.addEventListener('mouseleave', function() {
    cursor.style.visibility = 'hidden';
    document.body.style.cursor = 'none';
  });

  document.addEventListener('mouseenter', function() {
    cursor.style.visibility = 'visible';
  });

  // Hide cursor on initial load
  cursor.style.visibility = 'hidden';
  document.body.style.cursor = 'none';
});


//Glimer effect on Text name
function createShineEffect() {
            const textElement = document.querySelector('.hero h1');
            const shineElement = document.createElement('span');
            shineElement.classList.add('shine-effect');

            textElement.appendChild(shineElement);
        }

        createShineEffect();
		
// Blog functionality
const blogCounter = document.querySelector('.blog-counter');
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');

const blogContents = document.querySelectorAll('.blog-content');
const totalBlogs = blogContents.length;

let currentBlog = 1;

function updateBlogCounter() {
  blogCounter.textContent = `${currentBlog} / ${totalBlogs}`;
}

function showBlog(blogIndex) {
  // Hide all blog contents
  blogContents.forEach((content) => {
    content.style.display = 'none';
  });

  // Show the blog content with the specified index
  const blogToShow = blogContents[blogIndex - 1];
  blogToShow.style.display = 'block';

  // Update the blog counter
  currentBlog = blogIndex;
  updateBlogCounter();

  // Update the blog title, image, and text based on the index
  const blogTitle = blogToShow.querySelector('.blog-title');
  const blogImage = blogToShow.querySelector('.blog-image');
  const blogText = blogToShow.querySelector('.blog-text');
  const extraText = blogToShow.querySelector('.extra-text');

  // Example: Update the blog title, image source, and text
  blogTitle.textContent = blogTitle.textContent.trim();
  blogImage.src = `media/blog/blog-${blogIndex}.jpg`;
  
  // Hide the extra text by default
  extraText.style.display = 'none';

// Set up the read more button functionality
  const readMoreButton = blogToShow.querySelector('.read-more-button');
  readMoreButton.addEventListener('click', function () {
    if (extraText.style.display === 'none') {
      extraText.style.display = 'inline';
      this.textContent = 'Hide';
    } else {
      extraText.style.display = 'none';
      this.textContent = 'Read More';
    }
  });
}

function navigateToPreviousBlog() {
  if (currentBlog > 1) {
    currentBlog--;
    showBlog(currentBlog);
  }
}

function navigateToNextBlog() {
  if (currentBlog < totalBlogs) {
    currentBlog++;
    showBlog(currentBlog);
  }
}

leftArrow.addEventListener('click', navigateToPreviousBlog);
rightArrow.addEventListener('click', navigateToNextBlog);

// Initialize the first blog
showBlog(currentBlog);

//email
// Form Validation
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    sendEmail();
    contactForm.reset();
  }
});

function validateForm() {
  let isValid = true;

  if (nameInput.value.trim() === '') {
    isValid = false;
    displayError(nameInput, 'Please enter your name');
  } else {
    removeError(nameInput);
  }

  if (emailInput.value.trim() === '') {
    isValid = false;
    displayError(emailInput, 'Please enter your email');
  } else if (!isValidEmail(emailInput.value.trim())) {
    isValid = false;
    displayError(emailInput, 'Please enter a valid email address');
  } else {
    removeError(emailInput);
  }

  if (messageInput.value.trim() === '') {
    isValid = false;
    displayError(messageInput, 'Please enter your message');
  } else {
    removeError(messageInput);
  }

  return isValid;
}

function displayError(input, message) {
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('.error-message');
  errorElement.textContent = message;
  formControl.classList.add('error');
}

function removeError(input) {
  const formControl = input.parentElement;
  formControl.classList.remove('error');
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
//send email
function sendEmail() {
  emailjs.send('service_oaqqh7l', 'MEKAEmailGateway', {
    from_name: nameInput.value,
    from_email: emailInput.value,
    message: messageInput.value,
  })
    .then((response) => {
      console.log('Email sent successfully:', response.status, response.text);
      displaySuccessMessage();
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      // Add any error handling or messages you want here
    });
}
//message
function displaySuccessMessage() {
  const successMessage = document.getElementById('success-message');
  successMessage.textContent = 'Email sent successfully!';
  // You can further style or animate the success message if desired
}
