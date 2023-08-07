let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 49,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Acompañanos a celebrar nuestros 20 años el próximo sábado 12 de agosto...')
  .pauseFor(200)
  .deleteChars(10)
  .start()
  ;
