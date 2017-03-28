  var todo = angular.module('todo', []);

  todo.controller('todoListCtrl', ['$scope', function($scope) {
    $scope.todos = [];

    // add task
    $scope.addTodo = function(index) {

        var _todoText = $scope.todoText;
        var _nowTime = $scope.nowTime();

        if (_todoText == '' || _todoText == null) {

          return;
        } else {

          $scope.todos.push({
            text: $scope.todoText,
            time: _nowTime,
            done: false,
            showing: true
          });
          $scope.todoText = '';
        }

      }
      // changes task
    $scope.changeFlag = function(index) {


        if (!$scope.todos[index].done) {

          $scope.todos.forEach(function(ele, i) {

            if (i != index) ele.showing = true;


          });

          $scope.todos[index].showing = !$scope.todos[index].showing;
        }

      }
      // get now time
    $scope.nowTime = function() {

      var date = new Date();
      var seperator1 = "-";
      var seperator2 = ":";
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes();

      return currentdate;

    }

    // allCheck task

    $scope.allCheck = function(index) {

      $scope.todos.forEach(function(ele, i) {

        console.log(ele.done)

        $scope.todos.forEach(function() {

          ele.done[i] = ele.done ? true : false;
        });



      });

    }

    // delete task
    $scope.delFlag = function(index) {
      this.todos.splice(index, 1)
    }

    // undone todos

    $scope.remaining = function() {
        var count = 0;
        $scope.todos.forEach(function(ele) {
          count += ele.done ? 0 : 1;
        });
        return count;
      }
      // done todos

    $scope.doneTodo = function() {
        var count = 0;
        $scope.todos.forEach(function(ele) {
          count += ele.done ? 1 : 0;
        });
        return count;
      }
      // clear donetodos

    $scope.archive = function() {
      $scope.todos = $scope.todos.filter(function(ele) {
        return !ele.done;
      });
    }

  }]);