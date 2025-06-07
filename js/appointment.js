document.getElementById('appointment__choice').addEventListener('submit', function(e) {
  const dateInput = document.getElementById('date');
  const selectedDate = new Date(dateInput.value);
  // Sunday is 0
  if (selectedDate.getDay() === 0) {
    e.preventDefault();
    alert('Запись на воскресенье невозможна. Пожалуйста, выберите другой день.');
    dateInput.focus();
  }
});