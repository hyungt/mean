var myService = angular.module("myService", []);
        
//angularJS모듈에 서비스 등록하기
myService.service("todoService", function(){
    var todos = [
        {title:"연습1", writer:"홍길동", completed:false},
        {title:"공부하기", writer:"김유신", completed:false},
        {title:"영화보기", writer:"강감찬", completed:true}
    ];
    this.getAllTodos = function() {
        return todos;
    }
    this.addNewTodo = function(todo) {
        todos.push(todo);
    }
    this.deleteTodo = function(index) {
        todos.splice(index, 1);
    }
});