export const validateClientForm = () => {
   const userName = document.getElementById('floatingName');
   const userSurname = document.getElementById('floatingSurname');
   const userLastName = document.getElementById('floatingLastName');
   const unacceptableLetter = document.getElementById('unacceptableLetter');
   const writeName = document.getElementById('writeName');
   const writeSurname = document.getElementById('writeSurname');
   const writeLastName = document.getElementById('writeLastName');
   const requiredValue = document.getElementById('requiredValue');
   const validateArray = [unacceptableLetter, writeName, writeSurname, writeLastName, requiredValue];
   const regexp = /[^а-яА-ЯёЁ]+$/g;

   const onInputValue = input => {
      input.addEventListener('input', () => {
         input.style.borderColor = 'var(--color-gray-suit)';
         for (const item of validateArray) {
            item.textContent = '';
         }
      });

      input.oncut = input.oncopy = input.onpast = () => {
         input.style.borderColor = 'var(--color-gray-suit)';
         for (const item of validateArray) {
            item.textContent = '';
         }
      };

      input.onchange = () => {
         input.style.borderColor = 'var(--color-gray-suit)';

         if (userSurname.value && userName.value && userLastName.value) {
            for (const item of validateArray) {
               item.textContent = '';
            }
         }
      }
   };

   onInputValue(userName);
   onInputValue(userSurname);
   onInputValue(userLastName);

   const checkRequiredName = (input, message, name) => {
      if(!input.valut) {
         input.style.borderColor = 'var(--color-burnt-sienna)';
         message.textContent = `Введите ${name} клиента!`;
         return false;
      } else {
         message.textContent = '';
      }
      return true;
   }

   const chechByRegexp = (input, regexp) => {
      if (regexp.test(input.value)) {
         input.style.borderColor = 'var(--color-burnt-sienna)';
         unacceptableLetter.textContent = 'Недопустимые символы!';
         return false;
      }
      return true;
   };

   if (!checkRequiredName(userSurname, writeSurname, 'Фамилию')) {
      return false;
   };

   if (!checkRequiredName(userName, writeName, 'Имя')) {
      return false;
   };

   if (!checkRequiredName(userLastName, writeLastName, 'Отчество')) {
      return false;
   };

   if (!chechByRegexp(userName, regexp)) {
      return false;
   };

   if (!chechByRegexp(userSurname, regexp)) {
      return false;
   };

   if (!chechByRegexp(userLastName, regexp)) {
      return false;
   };

   return true;
}