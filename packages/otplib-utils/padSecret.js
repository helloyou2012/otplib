/**
 * Padding of secret to a certain buffer size.
 *
 * @module otplib-utils/padSecret
 * @param {object} secretBuffer - a buffer representation of your secret.
 * @param {number} size - number of bytes your secret should be.
 * @return {object} Buffer
 */
function padSecret(secretBuffer, size) {
  const secret = secretBuffer.toString('hex');
  const len = secret.length;

  if (size && len < size) {
    const newSecret = new Array((size - len) + 1).join(secret);
    return new Buffer(newSecret, 'hex').slice(0, size);
  }

  return secretBuffer;
}

export default padSecret;
