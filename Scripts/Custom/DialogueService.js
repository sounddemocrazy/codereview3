//=========================================== Dialog Box
function OpenInfoDialog(dialogTitle, dialogMsg, closeFunction) {
    if (dialogTitle == null) {
        dialogTitle = "Message";
    }

    $('#dlgHeader').html(dialogTitle);
    $('#dlgBody').html(dialogMsg);

    $('#btnDlgOK').show();
    $('#btnDlgYes').hide();
    $('#btnDlgNo').hide();
    $('#btnDlgConfirm').hide();
    $('#btnDlgCancel').hide();

    //$('#dialog').on('hidden', closeFunction);
    $('#btnDlgOK').off('click').on('click', closeFunction);

    $('#dialog').modal('show');

}


function OpenErrorDialog(dialogTitle, dialogMsg, closeFunction) {
    if (dialogTitle == null) {
        dialogTitle = "Error";
    }

    $('#dlgHeader').html(dialogTitle);
    $('#dlgBody').html(dialogMsg);

    $('#btnDlgOK').show();
    $('#btnDlgYes').hide();
    $('#btnDlgNo').hide();
    $('#btnDlgConfirm').hide();
    $('#btnDlgCancel').hide();

    $('#dialog').on('hidden', closeFunction);


    $('#dialog').modal('show');
}

function OpenYesNoDialog(dialogTitle, dialogMsg, yesFunction, noFunction, closeFunction) {
    if (dialogTitle == null) {
        dialogTitle = "Are you sure ?";
    }

    $('#dlgHeader').html(dialogTitle);
    $('#dlgBody').html(dialogMsg);

    $('#btnDlgOK').hide();
    $('#btnDlgYes').show();
    $('#btnDlgNo').show();
    $('#btnDlgConfirm').hide();
    $('#btnDlgCancel').hide();

    $('#btnDlgYes').click(yesFunction);
    $('#btnDlgNo').click(noFunction);
    $('#dialog').on('hidden', closeFunction);

    $('#dialog').modal('show');
}

function OpenConfirmDialog(dialogTitle, dialogMsg, confirmFunction, closeFunction) {
    if (dialogTitle == null) {
        dialogTitle = "Message";
    }

    $('#dlgHeader').html(dialogTitle);
    $('#dlgBody').html(dialogMsg);

    $('#btnDlgOK').hide();
    $('#btnDlgYes').hide();
    $('#btnDlgNo').hide();
    $('#btnDlgConfirm').show();
    $('#btnDlgCancel').show();

    //$('#btnDlgConfirm').click(confirmFunction);//edited by Avinash on 31st Aug 2015 to prevent multiple firing of button
    $('#btnDlgConfirm').off('click').on('click', confirmFunction);
    $('#dialog').on('hidden', closeFunction);

    $('#dialog').modal('show');
}
//===========================================