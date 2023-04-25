import { svgEmail, svgFb, svgOther, svgPhone, svgVk } from "./svg.js";

export const createContactLink = (type, value, element, svg, item) => {
   element = document.createElement('a');
   element.classList.add('contacts__link');
   element.innerHTML = svg;

   if (type === 'Email') {
      element.href = `mailto:${value.trim()}`;
   } else if (type === 'Телефон') {
      element.href = `tel:${value.trim()}`;
   } else {
      element.href = value.trim();
   }

   item.append(element);
}

export const createContactItemByType = (type, value, item) => {
   switch (type) {
      case 'Телефон':
         let phone;
         createContactLink(type, value, phone, svgPhone, type);
      case 'Facebook':
         let fb;
         createContactLink(type, value, fb, svgFb, type);
      case 'VK':
         let vk;
         createContactLink(type, value, vk, svgVk, type);
      case 'Email':
         let email;
         createContactLink(type, value, email, svgEmail, type);
      case 'Other':
         let other;
         createContactLink(type, value, other, svgOther, type);
      default:
         break;
   }
}

export const formatDate = (data) => {
   const newDate = new Date(data);

   const correctDate = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
   }

   const resultDate = newDate.toLocaleString('ru', correctDate);

   return resultDate;
}

export const formatTime = (data) => {
   const newDate = new Date(data);

   const correctDate = {
      hour: 'numeric',
      minute: 'numeric',
   }

   const resultTime = newDate.toLocaleString('ru', correctDate);

   return resultTime;
}