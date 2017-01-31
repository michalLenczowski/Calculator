var app=angular.module('application',[]);

app.controller('calculator',['$scope',function($scope){
	$scope.score=0.0;
	$scope.temp_score=0.0;

	
	$scope.activity='';
	$scope.summary=false;	
	


	
	$scope.show_numb=true;
	$scope.setactions=false;	
	$scope.numb=0;
	$scope.num='';
	$scope.show_score=false;
	$scope.show_final_score=false;
	
	$('input').click(function(){
		$scope.num=$(this).val();
	});

	$scope.compute=function(){
		

		if($scope.numb=='ERROR'){
			$scope.numb=0;
		}

		if($scope.temp_score=='ERROR'){
			$scope.score=$scope.temp_score=$scope.numb=0;
		}

		$scope.show_temp_score=$scope.show_final_score=false;
		$scope.show_numb=true;
		var str=$scope.num.toString();
		if($scope.numb==0){
			$scope.numb=str;
		}else{
			$scope.numb+=str;
		}		

		if($scope.numb.length>14){			
			$scope.numb='ERROR'			
		}
	};

	$scope.clear=function(){
		$scope.num='';
		$scope.numb=$scope.temp_score=$scope.score=0;
	};

	$scope.negative=function(){
		if($scope.show_temp_score){

		}else{
			$scope.numb=(-1)*$scope.numb;
		}
	};

	$scope.summary=function(){
		
		if($scope.activity=='add'){

				$scope.temp_score=$scope.temp_score+parseFloat($scope.numb)
			}else if($scope.activity=='subtract'){
				$scope.temp_score=$scope.temp_score-parseFloat($scope.numb)
			}else if($scope.activity=='multiply'){
				$scope.temp_score=$scope.temp_score*parseFloat($scope.numb)
			}else if($scope.activity=='divide'){
				$scope.temp_score=($scope.temp_score)/(parseFloat($scope.numb))
			}
			if($scope.temp_score.toString().length>14){
				$scope.score='ERROR'
			}else{
				$scope.score=$scope.temp_score;
			}
		$scope.activity=null;		
		$scope.show_temp_score=$scope.show_numb=false;
		$scope.show_final_score=true;				
	};

	$scope.add=function(){
		if($scope.temp_score=='ERROR'){
			$scope.score=$scope.temp_score=$scope.numb=0;
		}

		$scope.show_temp_score=$scope.show_final_score=false;
		$scope.show_numb=true;
		if($scope.setactions ){
			if($scope.activity=='add'){
				$scope.temp_score=$scope.temp_score+parseFloat($scope.numb)
			}else if($scope.activity=='subtract'){
				$scope.temp_score=$scope.temp_score-parseFloat($scope.numb)
			}else if($scope.activity=='multiply'){
				$scope.temp_score=$scope.temp_score*parseFloat($scope.numb)
			}else if($scope.activity=='divide'){
				$scope.temp_score=($scope.temp_score)/(parseFloat($scope.numb))

			}
			if($scope.temp_score.toString().length>13){
				$scope.temp_score='ERROR'
			}
		$scope.show_numb=$scope.show_final_score=false;
		$scope.show_temp_score=true;
		}else{
			$scope.temp_score=parseFloat($scope.numb);
		}		
		$scope.numb=0;
		$scope.setactions=true;
		$scope.activity='add'
	};

	$scope.subtract=function(){
		if($scope.temp_score=='ERROR'){
			$scope.score=$scope.temp_score=$scope.numb=0;
		}

		
		$scope.show_temp_score=$scope.show_final_score=false;
		$scope.show_numb=true;
		if($scope.setactions ){
			if($scope.activity=='add'){
				$scope.temp_score=$scope.temp_score+parseFloat($scope.numb)
			}else if($scope.activity=='subtract'){
				$scope.temp_score=$scope.temp_score-parseFloat($scope.numb)
			}else if($scope.activity=='multiply'){
				$scope.temp_score=$scope.temp_score*parseFloat($scope.numb)
			}else if($scope.activity=='divide'){
				$scope.temp_score=($scope.temp_score)/(parseFloat($scope.numb))

			}
			if($scope.temp_score.toString().length>13){
				$scope.temp_score='ERROR'
			}

			
		$scope.show_numb=$scope.show_final_score=false;
		$scope.show_temp_score=true;
		}else{
			$scope.temp_score=parseFloat($scope.numb);
		}		
		$scope.numb=0;
		$scope.setactions=true;
		$scope.activity='subtract'
	};

	$scope.multiply=function(){
		if($scope.temp_score=='ERROR'){
			$scope.score=$scope.temp_score=$scope.numb=0;
		}

		$scope.show_temp_score=$scope.show_final_score=false;
		$scope.show_numb=true;
		if($scope.setactions ){
			if($scope.activity=='add'){
				$scope.temp_score=$scope.temp_score+parseFloat($scope.numb)
			}else if($scope.activity=='subtract'){
				$scope.temp_score=$scope.temp_score-parseFloat($scope.numb)
			}else if($scope.activity=='multiply'){
				$scope.temp_score=$scope.temp_score*parseFloat($scope.numb)
			}else if($scope.activity=='divide'){
				$scope.temp_score=($scope.temp_score)/(parseFloat($scope.numb))

			}
			if($scope.temp_score.toString().length>13){
				$scope.temp_score='ERROR'
			}

			$scope.show_numb=$scope.show_final_score=false;
		$scope.show_temp_score=true;
		}else{
			$scope.temp_score=parseFloat($scope.numb);
		}		
		$scope.numb=0;
		$scope.setactions=true;
		$scope.activity='multiply';
	};


	$scope.divide=function(){
		if($scope.temp_score=='ERROR'){
			$scope.score=$scope.temp_score=$scope.numb=0;
		}

		
		$scope.show_temp_score=$scope.show_final_score=false;
		$scope.show_numb=true;
		if($scope.setactions ){
			if($scope.activity=='add'){
				$scope.temp_score=$scope.temp_score+parseFloat($scope.numb)
			}else if($scope.activity=='subtract'){
				$scope.temp_score=$scope.temp_score-parseFloat($scope.numb)
			}else if($scope.activity=='multiply'){
				$scope.temp_score=$scope.temp_score*parseFloat($scope.numb)
			}else if($scope.activity=='divide'){
				$scope.temp_score=($scope.temp_score)/(parseFloat($scope.numb))

			}
			if($scope.temp_score.toString().length>13){
				$scope.temp_score='ERROR'
			}

			$scope.show_numb=$scope.show_final_score=false;
		$scope.show_temp_score=true;
		}else{
			$scope.temp_score=parseFloat($scope.numb);
		}		
		$scope.numb=0;
		$scope.setactions=true;
		$scope.activity='divide'
	
	};
	
}]);


