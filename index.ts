import { RtcRole, RtcTokenBuilder } from "agora-token";

export default class AgoraCallService {
  static generateToken(
    channelName: string,
    uid: string | number,
    role = RtcRole.PUBLISHER
  ) {
    const appID = "AGORA_APP_ID";
    const appCertificate = "AGORA_APP_CERTIFICATE";

    const currentTimestamp = Math.floor(Date.now() / 1000);
    const expirationTimeInSeconds = 3600;
    const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;

    const tokenA = RtcTokenBuilder.buildTokenWithUid(
      appId,
      appCertificate,
      channelName,
      uid,
      role,
      privilegeExpiredTs
    );
    console.log("Token With Integer Number Uid: " + tokenA);
    /* From the function signature it should be 
    
    const tokenExpirationInSecond = 3600; // here the missing parameter
    const tokenA = RtcTokenBuilder.buildTokenWithUid(
      appID,
      appCertificate,
      channelName,
      uid,
      role,
      tokenExpirationInSecond, // here the missing parameter
      privilegeExpiredTs
    );
    */
  }
}
