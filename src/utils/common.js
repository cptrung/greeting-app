import Toast from '../components/Toast';

export function showToast(text, error = false) {
  const toast = (error && Toast.getToastError()) || Toast.getToast();
  toast && toast.show(text.toUpperCase(), 1500);
}
