function Light(ONANDOFF)
{
    
    let image;
    if (ONANDOFF == 0)
    {
        image = "0.png";
    }   
    else
    {
        image = "1.png";
    }
    document.getElementById('bulb').src = image;
}
