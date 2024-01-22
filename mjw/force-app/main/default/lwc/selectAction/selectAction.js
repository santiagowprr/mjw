import { LightningElement } from 'lwc';
import myResource from '@salesforce/resourceUrl/mjwOwnersOnSofomoParty';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class SelectAction extends LightningElement {
    isSelectionMade = false;
    createAMemeSelected = false;

    handleOptionSelected(){
        // const optionSelected = event.target.dataset.option;
        // if (optionSelected == 'meme'){
            try {
                this.isSelectionMade = true;
                this.createAMemeSelected = true;
            } catch (error){
                this.handleError(error);
            }
        // }
    }
    handleGoHome(){
        this.isSelectionMade = false;
        this.createAMemeSelected = false;
    }

    mjwOwnersPhoto = myResource;
    handleNavigateToCustomPage1(event) {
        event.preventDefault();
        //your custom navigation here
    }
    handleNavigateToCustomPage2(event) {
        event.preventDefault();
        history.back();
    }

    handleError(error) {
        console.error(error); // Log the error to the console for debugging (optional)

        // Show a toast message with information about the error
        const toastEvent = new ShowToastEvent({
            title: 'Error',
            message: error.message,
            variant: 'error',
        });
        this.dispatchEvent(toastEvent);
    }
    handleStatusChange(){
        
    }
}