const myLesson = [
    {   lesson: 1,
        type: 'basic',
        points: 2
    },
    {lesson: 2, type: 'additional', points: 4},
    {lesson: 3, type: 'basic', points: 6},
    {lesson: 4, type: 'additional', points: 3},
    {lesson: 5, type: 'basic', points: 4},
    {lesson: 6, type: 'basic', points: 2},
    {lesson: 7, type: 'additional', points: 2},
    {lesson: 8, type: 'basic', points: 6},
    {lesson: 9, type: 'basic', points: 4},
    {lesson: 10, type: 'basic', points: 6},
    {lesson: 11, type: 'additional', points: 5}, 
    {lesson: 12, type: 'basic', points: 2}, 
    {lesson: 13, type: 'additional', points: 2}, 
    {lesson: 14, type: 'basic', points: 4},
    {lesson: 15, type: 'additional', points: 1},
    {lesson: 16, type: 'additional', points: 7},
  ];
  
  const map = new Map([
      ['les',myLesson]
  ]);
  const arr = map.get('les');
  
  function showLesson(){
      const arr2=[]; 
      for(let i = 0; i < arr.length;i++){
         if(arr[i].type === 'additional'){
      arr[i].delete; 
         }else{
            arr2.push(arr[i]); 
            }
         }
         for(let i = 0; i < arr2.length;i++){
             arr2[i].points = ( arr2[i].points/2);
         } 
         console.log(arr2);
      
  }
  
  showLesson();
  console.log(myLesson);
  