function toggleTask(element) {
    var listItem = element.closest('li');
    var taskText = listItem.querySelector('span');
    if (element.checked) {
      taskText.style.textDecoration = 'line-through';
    } else {
      taskText.style.textDecoration = 'none';
    }
  }

  function addTask() {
    var taskText = document.getElementById('taskText').value;
    if (taskText.trim() !== '') {
      var list = document.getElementById('taskList');
      var listItem = document.createElement('li');
      listItem.innerHTML = '<input type="checkbox" class="form-check-input" onclick="toggleTask(this)"> <span>' + taskText + '</span>';
      list.appendChild(listItem);
      document.getElementById('taskText').value = '';
  
      // Agregar animación usando anime.js
      anime({
        targets: listItem,
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 400,
        easing: 'easeOutQuad'
      });
    }
  }  

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }