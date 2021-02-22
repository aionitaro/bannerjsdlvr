 function prepareFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://maller.ro/ads/300250.html");
        ifrm.style.width = "300px";
        ifrm.style.height = "250px";
        document.body.appendChild(ifrm);
    }
    
    prepareFrame();
