const defaultPairings = {
  ctrlKey: false,
  shiftKey: false,
  altKey: false,
};

/**
 * Detect keyboard keys combination press and invoke a callback.
 *
 * @param  {String}   key      Key stroke to watch (e.g 'z').
 * @param  {Object}   pairings Define which other keys you want to watch as well.
 * @param  {Null}     pairings Listen to only the given key.
 * @param  {Function} callback Function to invoke when match.
 *
 * @return {void}
 */
const onKeyPairsPress = (key, pairings = defaultPairings, callback) => {
  const computedPairings = { ...defaultPairings, ...pairings };
  const onParaingKeys = pairings && (
    Object
      .keys(computedPairings)
      .filter(pairingKey => computedPairings[pairingKey])
  );
  const onParaingKeysSize = pairings && onParaingKeys.length;
  const eventListener = event => {
    if (event.key !== key) return;

    if (!onParaingKeysSize) {
      callback();
      return;
    }

    if (onParaingKeys.every(paringKey => event[paringKey])) {
      callback();
    }
  };

  document.addEventListener('keydown', eventListener);

  return () => {
    document.removeEventListener('keydown', eventListener);
  }
};

export default onKeyPairsPress;
