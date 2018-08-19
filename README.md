# Tempo: Notification

~~Required~~ Optional props (will fall back to notifications api when not defined):

```javascript
// @flow

type Props = {
  notifications: Notification[],
  close: (e: SyntheticEvent) => null,
  didViewNotification: (notificationId: Notification.id) => null,
};

type Notification = {
  id: number,
  title: string,
  message: string,
  headerImage: string
};

const exampleProps: notifications = [
{
  "id":255750787,
  "title":"Update Occupation",
  "message":"Hi {{Alias}},<br /><br />In order to complete your account details, please take a minute of your time to update your occupation.<br /><br /><a>Edit Profile</a>",
  "headerImage":"http://www.foxybingo.com/content/dam/bingo/foxybingocom/mailers/fb_3366_important_notice_mailer.jpg"},
{
  "id":266138073,
  "title":"IT'S THE FINAL DAY TO ENTER!","message":"How would you like to win an overnight stay at one of the most spectacular venues in the UK – No Man’s Fort, just off the coast of Portsmouth?<br />On Friday 28th July we'll be taking over the whole place with exclusive use, claiming it as Fort Foxy!<br />You can win tickets for you and a guest to this awesome VIP event! Click HERE to find out more. YOU MUST OPT-IN ON THE MAIN PAGE TO ENTER BEFORE 23:50 TONIGHT!<br />Don't miss out - enter now!!!",
  "headerImage":"http://www.foxybingo.com//content/dam/bingo/foxybingocom/mailers/fb_3366_important_notice_mailer.jpg"
}];

<Notification
    notifications={ exampleProps }
/>
```

