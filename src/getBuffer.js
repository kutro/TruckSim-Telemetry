function getBuffer(scsSDKTelemetry) {
  try {
  
    const arrayBuffer = scsSDKTelemetry.getArrayBuffer()
    const buffer      = new Buffer.from(arrayBuffer)
    
    return buffer
  
  } catch (err) {  /* ignore, make the function return undefined */  }
}

module.exports = getBuffer