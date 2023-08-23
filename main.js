

document.getElementsByClassName('navbar-toggler')[0].addEventListener('click', function(){
  document.getElementsByClassName('list-group')[0].classList.toggle('show');
});

document.querySelector('#login').addEventListener('click', function(){
  document.querySelector('.black-bg').classList.add('show-modal');
});

document.querySelector('#close').addEventListener('click', function(){
  document.querySelector('.black-bg').classList.remove('show-modal');
});



// 전송버튼 누르면 input에 입력한 값이 공백이면, 알림창 띄워주기

document.querySelector('form').addEventListener('submit', function(){
  if(document.getElementById('email').value == ''){
    alert('빈칸을 채워주세요');
  }
});


// 폼점송 막으려면
// e.preventDefault()








