'use strict';

{
    function hi (){
        document.getElementById('but').classList.add('hide');}

    document.querySelector('button').addEventListener('click', () => {
        const result = confirm('くじ引きを始めますか？');
        if(result){
            document.getElementById('CLICKDONE').textContent = 'OKがクリックされました！くじ引きを始めます！';
        document.getElementById('uranai').classList.remove('hidden');
        hi();
        }else{
            document.getElementById('CLICKDONE').textContent = 'キャンセルされました。';
            document.getElementById('uranai').classList.add('hidden');
            hi();
        }
        
        
    });
     document.getElementById('kuzi').addEventListener('click', () => {
        const ran = ['大吉!!!', '中吉!!', '小吉!','吉','凶!', '小凶!!','大凶!!!'];
    const R = ran [Math.floor(Math.random() * ran.length)];
    document.getElementById('kekka').textContent = R ;
    if(R.includes('凶')){
        document.getElementById('kekka').classList.add('bad')
    }else{
        document.getElementById('kekka').classList.remove('bad')
    }
    if(R.includes('大吉')){
        document.getElementById('kekka').classList.add('lucky')
    }else{
        document.getElementById('kekka').classList.remove('lucky')
    }
     
     });
    
 }