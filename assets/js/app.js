window.onload = () => {

    const styleBoxesDesktop = () => {

        const boxes = document.querySelectorAll(".desktop .page .box");


        Array(boxes.length).fill(0).forEach((_, i) => {
            const box = document.getElementById(`boxD${i + 1}`);

            const area = document.getElementById(`areaD${i + 1}`);

            if (area) {
                const coords = area.coords.split(",");

                box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
                box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
                box.style.left = Number(coords[0]) + "px"
                box.style.top = Number(coords[1]) + "px"
            }
        });

    }

    const styleBoxesMobile = () => {

        const boxes = document.querySelectorAll(".mobile .page .box");


        Array(boxes.length).fill(0).forEach((_, i) => {
            const box = document.getElementById(`boxM${i + 1}`);

            const area = document.getElementById(`areaM${i + 1}`);

            if (area) {
                const coords = area.coords.split(",");

                box.style.width = (Math.abs(coords[0] - coords[2])) + "px"
                box.style.height = (Math.abs(coords[1] - coords[3])) + "px"
                box.style.left = Number(coords[0]) + "px"
                box.style.top = Number(coords[1]) + "px"
            }
        });

    }


    setTimeout(() => {
        styleBoxesDesktop();
        styleBoxesMobile();
    }, 1000)


}