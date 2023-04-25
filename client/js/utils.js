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