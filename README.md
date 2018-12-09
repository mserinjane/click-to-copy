# click-to-copy
Copies text directly to the clipboard

# How to use

## Attributes
text (String) : the text that will be copied on click
uniqueId (String) : when using in aura iteration this must be unique - see second example for usage
tooltip (String) : the text to show when you hover over the text to be copied
messageTitle (String) : the title of the notification toast
messageBody (String) : the body of the notification toast
showToast (Boolean) : the lightning:notificationsLibrary is not available for lightning (standalone) app's. If this is the intended usecase, showToast should be set to false and an alternative should be used instead


## Sample usage for a single instance

<c:ClickToCopy text="Test text"
                   uniqueId="text1"
                   tooltip="Click to copy"
                   messageTitle="Copied!"
                   messageBody="Here is the message body" />


## Sample usage in an aura iteration with dynamic message body

<aura:attribute name="phoneNumbers" type="List" default="[{ phone: "7946 0000", phone: "7946 12345" }]" />
<aura:iteration items="{! v.phoneNumbers }" var="item" indexVar="index">
    <c:ClickToCopy text="{! item.phone }"
                       uniqueId="{! 'phone-' + index }"
                       tooltip="Click to copy"
                       messageTitle="Copied!"
                       messageBody="{! item.phone + ' has been copied to your clipboard.' }" />
</aura:iteration>
