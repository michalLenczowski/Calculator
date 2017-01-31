    <!DOCTYPE html>
<html lang="pl" ng-app="application">
    <head>     
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Calculator</title>
        <link href='http://fonts.googleapis.com/css?family=Open+Sans:700,300,600,400&subset=latin-ext' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Raleway:300,200,100' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
       <link href="main.css" rel="stylesheet">        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
        
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>

    <script src="https://code.angularjs.org/1.5.8/angular-sanitize.min.js"></script>   
    <script src="application.js"></script>
    </head>
    <body ng-controller="calculator">
    <div class="col-md-4 text-center" id="calculator">          
        <div id="screen">       
        <p id="score" ng-if="show_temp_score">{{temp_score}}</p>
        <p id="score" ng-if="show_numb">{{numb}}</p>
        <p id="score" ng-if="show_final_score">{{score}}</p>
        </div>
          <table id="table">
            <tr>
                <td><input type="button" class="btn btn-primary" value="C" id="clear"  ng-click="clear()"/></td>
                <td><input type="button" class="btn btn-primary menu" value="±" ng-click="negative()"/></td>
                <td><input type="button" class="btn btn-primary menu" value="÷" ng-click="divide()"/></td>
                <td><input type="button" class="btn btn-primary menu" value="X"  ng-click="multiply()"/></td>
            </tr>
            <tr>
                <td> <input type="button" class="btn btn-primary numb_btn" value="7"  ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary numb_btn" value="8"  ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary numb_btn" value="9"  ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary menu" value="-"  ng-click="subtract()"/></td>
            </tr> 
            <tr>
                <td><input type="button" class="btn btn-primary numb_btn" value="4"   ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary numb_btn" value="5"  ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary numb_btn" value="6"  ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary menu" value="+"  ng-click="add()"/></td>
            </tr> 
            <tr>
                <td> <input type="button" class="btn btn-primary numb_btn" value="1" ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary numb_btn" value="2"  ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary numb_btn" value="3"  ng-click="compute()"/></td>
                <td rowspan="2"><input type="button" class="btn btn-primary menu_equal" value="="  ng-click="summary()"/></td>
            </tr>
            <tr>
                <td colspan="2"><input type="button" class="btn btn-primary numb_btn_zero" value="0" ng-click="compute()"/></td>
                <td><input type="button" class="btn btn-primary numb_btn" value="." ng-click="compute()"/></td>                
            </tr>
            </table>  
              </div></body>
</html>