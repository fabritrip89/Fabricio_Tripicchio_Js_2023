function search() {
    let filter = document.getElementsById('find').value.toUpperCase();

    let item = document.querySelectorAll ('.product');

    let l = document.getElementsByTagName ('h3');

    for ( var i = 0;i<=l.length; i++) {
        let a=item [i] .getElementsByTagName (h3)[0];

        let value=a.innerHTML || a.innerHTML || a.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display= "";
            
        }
        else 
        {

            item[i].style.display="none";            
        }
    }
    
}