

const modal = {
    openModal: (className: string) => {
        const body = document.querySelector("body");
        const modal = document.querySelector(className);
        modal?.classList.toggle("active");
        body?.classList.toggle("active");

        window.onclick = (e:MouseEvent) => {
            if((e?.target as HTMLElement).matches(className)){
                modal?.classList.remove("active");
                body?.classList.remove("active");
            }
        }
    },

    closeModal: (className: string) => {
        const body = document.querySelector("body");
        const modal = document.querySelector(className);
        modal?.classList.remove("active");
        body?.classList.remove("active");
    }
}

export const {openModal, closeModal} = modal;