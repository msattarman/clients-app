import { createClientsForm } from "./createModalForm.js";

export const editClientModal = (data) => {
   const editModal = document.createElement('div');
   const editModalContent = document.createElement('div');
   const createForm = createClientsForm();
   const titleId = document.createElement('span');

   titleId.classList.add('modal__id');
   editModal.classList.add('modal-edit', 'site-modal', 'modal-active');
   editModalContent.classList.add('edit-modal__content', 'site-modal__content', 'modal-active');

   titleId.textContent = 'ID: ' + data.id.substr(0, 6);
   createForm.modalTitle.textContent = 'Изменить данные';
   createForm.cancelBtn.textContent = 'Удалить клиента';

   createForm.modalTitle.append(titleId);
   editModalContent.append(createForm.modalClose, createForm.modalTitle, createForm.form);
   editModal.append(editModalContent);

   return {
      editModal,
      editModalContent,
   }
} 