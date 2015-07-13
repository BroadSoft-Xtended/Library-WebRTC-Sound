# Sound

Handles ringing, click and DTMF sounds.

Model : bdsft_webrtc.default.sound

## Media
<a name="media"></a>

Filename        |Key            |Description
----------------|---------------|----------------------------------
click.ogg       |click          |Sound played on click.
dtmf-0.ogg      |dtmf-0         |Sound played for DTMF 0.
dtmf-1.ogg      |dtmf-1         |Sound played for DTMF 1.
dtmf-2.ogg      |dtmf-2         |Sound played for DTMF 2.
dtmf-3.ogg      |dtmf-3         |Sound played for DTMF 3.
dtmf-4.ogg      |dtmf-4         |Sound played for DTMF 4.
dtmf-5.ogg      |dtmf-5         |Sound played for DTMF 5.
dtmf-6.ogg      |dtmf-6         |Sound played for DTMF 6.
dtmf-7.ogg      |dtmf-7         |Sound played for DTMF 7.
dtmf-8.ogg      |dtmf-8         |Sound played for DTMF 8.
dtmf-9.ogg      |dtmf-9         |Sound played for DTMF 9.
dtmf-busy.ogg   |dtmf-busy      |Sound played for DTMF busy.
dtmf-pound.ogg  |dtmf-pound     |Sound played for DTMF pound.
dtmf-star.ogg   |dtmf-ringback  |Sound played for DTMF star.
ringtone.ogg    |ringtone       |Sound played for incoming calls.

## Configuration
<a name="configuration"></a>

Property        |Type    |Default  |Description
----------------|--------|---------|-------------------------------------------------------------------------------------
volumeClick     |number  |1        |If 1 the volume is the highest, 0 is no volume and 0.5 is mid volume on a click.
volumeDTMF      |number  |1        |If 1 the volume is the highest, 0 is no volume and 0.5 is mid volume on a DTMF.
volumeRingtone  |number  |1        |If 1 the volume is the highest, 0 is no volume and 0.5 is mid volume on a ringtone.

## Methods
<a name="methods"></a>

Method              |Parameters  |Description
--------------------|------------|-------------------------------------------------
pause()             |            |Pauses any click, ringing or DTMF sound played.
playClick()         |            |Plays the click base64 media.
playDtmfRingback()  |            |Plays the dtmf-ringback base64 media.
playRingtone()      |            |Plays the ringtone base64 media.

