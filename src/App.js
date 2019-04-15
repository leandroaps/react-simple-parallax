import React from 'react';
import './App.css';

const parallaxEls = document.querySelectorAll('[data-speed]');

const scrollHandler = () => {
  for (const parallaxEl of parallaxEls) {
    const direction = parallaxEl.dataset.direction === 'up' ? '-' : '';
    const transformY = this.pageYOffset * parallaxEl.dataset.speed;
    if (parallaxEl.classList.contains('banner-title')) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
    } else if (parallaxEl.classList.contains('banner-subtitle')) {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
    } else {
      parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
    }
  }
};

window.addEventListener('scroll', scrollHandler);

const App = () => (
  <div className="App">
    <section className="banner" data-direction="down" data-speed="0.6">
      <h1 className="banner-title" data-direction="up" data-speed="0.25">
        What is Lorem Ipsum?
      </h1>
      <p className="banner-subtitle" data-direction="up" data-speed="0.35">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
      <img
        className="skiing"
        src="./assets/images/anthony-delanoix-757770-unsplash.jpg"
        alt=""
        data-direction="up"
        data-speed="0.85"
      />
    </section>

    <section className="content">
      <div className="container">
        <h2>Where does it come from?</h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
          dolor sit amet...", comes from a line in section 1.10.32.
        </p>
      </div>
    </section>
  </div>
);

export default App;
