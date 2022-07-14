function addUser(){
    var player1=document.getElementById("player1_input_name").value
    var player2=document.getElementById("player2_input_name").value
    localStorage.setItem("player1_name",player1)
    localStorage.setItem("player2_name",player2)
    window.location="game_page.html"
    }
    function send(){
        number1=document.getElementById("number1").value;
        number2=document.getElementById("number2").value;
    }
    question_turn="player1";
    answer_turn="player2";
    function check(){
        get_answer=document.getElementById("input_check_box").value;
        if (get_answer==actul_answer) {
            
        }
    }
    