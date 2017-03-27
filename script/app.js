var app=angular.module('primeApp',[]);
app.controller('primeCtrl',function($scope){
	$scope.prime=function(num){
	$scope.result = [];
     for(var i=2;i<=num;i++)
     	

        {
        	
            var prime=0;
            for(var j=2;j<i;j++)
            {
            	
                if(i%j==0)
                {
                	
                    prime=1;
                }
            }
            if(prime==0){
            	 $scope.result.push(i);
            	 console.log("hhh",i)
               
            }
        }
        
    


    }
});