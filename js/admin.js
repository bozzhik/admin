const adminText = document.getElementById('user');
let adminLogin = prompt('Enter your admin login:', 'admin');

if (adminLogin) {
   adminText.innerHTML = 'Welcome, ' + `<span>${adminLogin}</span>` + '!';
} else {
   adminText.innerHTML = 'Welcome, <span>unknown!</span>';
}

const wrapper = document.getElementById('wrapper');
wrapper.style.transform = 'translate(-17%, -40%)'; // set start position

window.onmousemove = (e) => {
   const mouseX = e.clientX,
      mouseY = e.clientY;

   const xDecimal = mouseX / window.innerWidth,
      yDecimal = mouseY / window.innerHeight;

   const maxX = wrapper.offsetWidth - window.innerWidth,
      maxY = wrapper.offsetHeight - window.innerHeight;

   const panX = maxX * xDecimal * -1,
      panY = maxY * yDecimal * -1;

   wrapper.animate(
      {
         transform: `translate(${panX}px, ${panY}px)`
      },
      {
         duration: 6000,
         fill: 'forwards',
         easing: 'ease'
      }
   );
};
