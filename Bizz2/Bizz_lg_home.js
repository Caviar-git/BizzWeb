const navbar=document.querySelector('nav');
const head=document.querySelector('#head');
const landscape=document.querySelector('.landscape-me');
const intro_container=document.querySelector('.intro-container');
const intro=document.querySelector('.intro');
const activity=document.querySelector('.activity');
const explore=document.querySelector('.activity-header');
const other=document.querySelector('.other-and-besides');
const steel_gray=document.querySelector('.steel-gray');
const c=document.querySelector('.C');
const c_img=document.querySelector('.C-img');
const c_content=document.querySelector('.C-content');
const bash_content=document.querySelector('.bash-content');
const bash_img=document.querySelector('.laptop');
const hire=document.querySelector('.hire');
const end=document.querySelector('.end');

const slider_options={
  threshold:0.3
};
const fader_options={
  threshold:0.4
};
const slideUp_options={
  threshold:0.4
};
const hire_options={
  threshold:0.2
};
$('.dropdown-box').hide();
$('.carat-up').hide();

$('.dropdown').mouseenter(function(){
  $('.dropdown-box').slideDown('medium');
  $('.carat-down').hide();
  $('.carat-up').fadeIn();
});

$('.up').mouseenter(function(){
  $('.dropdown-box').slideUp('medium');
  $('.carat-down').fadeIn();
  $('.carat-up').hide();
});

$('.dropdown-box').mouseleave(function(){
  $('.dropdown-box').slideUp('medium');
  $('.carat-down').fadeIn();
  $('.carat-up').hide();
})

// For observing Navbar
const nav_obs= new IntersectionObserver(
  function(entries){
    entries.forEach(
      function(entry){
        if(!entry.isIntersecting)
          navbar.classList.add('nav-scroll');
        else
          navbar.classList.remove('nav-scroll');
      });

  });

nav_obs.observe(head);

//Observing the intro
const slider=new IntersectionObserver(
  function(entries){
    entries.forEach(entry =>{
      if (!entry.isIntersecting)
        return;
      else{
        landscape.classList.add('slide-in');
        intro_container.classList.add('slide-in');
        slider.unobserve(intro);
      }
    });
  },slider_options);

slider.observe(intro);

//Observing the blues design
const fader=new IntersectionObserver(
  function(entries){
    entries.forEach(entry =>{
      if (!entry.isIntersecting)
        return;
      else{
        activity.classList.add('fade-in');
        fader.unobserve(explore);
        // intro_container.classList.add('fade-in');
        // fader.unobserve();
      }
    });
  },fader_options);

fader.observe(explore);

// Observing others section
const slide_up=new IntersectionObserver(
  function(entries){
    entries.forEach(entry =>{
      if (!entry.isIntersecting)
        return;
      else{
        other.classList.add('slide-up');
        slide_up.unobserve(other);
      }
    });
  },slideUp_options);

slide_up.observe(other);

//Observe steel gray div
const fade_inSteel=new IntersectionObserver(
  function(entries){
    entries.forEach(entry =>{
      if (!entry.isIntersecting)
        return;
      else{
        steel_gray.classList.add('fade-inSteel');
        c_img.classList.add('slide-in');
        c_content.classList.add('slide-in');
        fade_inSteel.unobserve(c);
      }
    });
  });

fade_inSteel.observe(c);

//Observing Bash section
const bash_obs=new IntersectionObserver(
  function(entries){
    entries.forEach(entry =>{
      if (!entry.isIntersecting)
        return;
      else{
        bash_content.classList.add('slide-in');
        bash_img.classList.add('slide-in');
        bash_obs.unobserve(c);
      }
    });
  });

bash_obs.observe(bash_content);

// Observing the blue hire band
const hire_obs=new IntersectionObserver(
  function(entries){
    entries.forEach(entry =>{
      if (!entry.isIntersecting)
        return;
      else{
        hire.classList.add('slide-up');
        hire_obs.unobserve(hire);
      }
    });
  },hire_options);

hire_obs.observe(hire);

//Observing end Section
const end_obs=new IntersectionObserver(
  function(entries){
    entries.forEach(entry =>{
      if (!entry.isIntersecting)
        return;
      else{
        end.classList.add('slide-up');
        foot.classList.add('fade-in');
        end_obs.unobserve(hire);
      }
    });
  });

end_obs.observe(end);
