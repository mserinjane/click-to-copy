({
    clickToCopy : function (component, event, helper) {
        const uniqueId = component.get('v.uniqueId');
        const input = document.getElementById(uniqueId);
        input.focus();
        input.select();
        document.execCommand('copy');
        helper.showToast(component);
    },

    showToast : function(component) {
        if (component.get("v.showToast")) {
            component.find('notifLib').showToast({
                "title": component.get("v.messageTitle"),
                "message": component.get("v.messageBody")
            });
        }
    },
})