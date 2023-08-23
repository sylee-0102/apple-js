

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

// .length - 글자 수


document.querySelector('form').addEventListener('submit', function(e){
  if(document.getElementById('email').value == ''){
    alert('아이디를 입력해주세요');
    e.preventDefault();
  }
  if(document.getElementById('pw').value == ''){
    alert('비밀번호를 입력해주세요');
    e.preventDefault();
  }
  if(document.getElementById('pw').value.length < 6){
    alert('비밀번호는 6자 이상 입력해주세요');
    e.preventDefault();
  }
});






// 폼 전송 막으려면
// e.preventDefault()








