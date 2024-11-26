import React from 'react';
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from 'react-router-dom';

const Room = () => {

    const {roomId} = useParams()
    const roomID = roomId
    const myMeeting = async (element) => {
      // generate Kit Token
      const appID = 2145460427
      

      const serverSecret = "29e44c6aa0bec2caa5b59d6c4cce3b95";
      const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "");
    console.log(kitToken)
    
     // Create instance object from Kit Token.
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Copy link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
        },
      });
    }
  
  return (
    <div
    ref={myMeeting}
    style={{ width: '100vw', height: '100vh' }}>
  <h1>hesdfdsf</h1>
  </div>
  )

}

export default Room
