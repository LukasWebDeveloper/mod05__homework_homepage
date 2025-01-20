{
   
   let onChangeLogoPossition = () => {
      const logoElement = document.querySelector(".js-header__logo");
      logoElement.classList.toggle("js-header__logoPosition");
   }
   
   
   const init = () => {
      const buttonLogoElement = document.querySelector(".js-button__logo");
      buttonLogoElement.addEventListener("click", onChangeLogoPossition);
   };

   init();
}