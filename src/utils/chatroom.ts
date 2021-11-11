const scrollOffset = 111;

export const addScrollListener = (
  container: HTMLElement | null,
  listener: () => void
): void => {
  if (container !== null) {
    container.addEventListener('scroll', listener);
  }
};

export const removeScrollListener = (
  container: HTMLElement | null,
  listener: () => void
): void => {
  if (container !== null) {
    container.removeEventListener('scroll', listener);
  }
};

export const isBottom = (): boolean => {
  const messageBody = document.getElementById('chat-body');
  if (messageBody === null) {
    return false;
  }
  return (
    messageBody.offsetHeight + (messageBody as HTMLElement).scrollTop >=
    messageBody.scrollHeight - 60
  );
};

export const scrollToBottom = (): void => {
  const messageBody = document.getElementById('chat-body');
  if (messageBody !== null) {
    messageBody.scrollTop = messageBody.scrollHeight;
  }
};

export const isLeft = (container: HTMLElement | null): boolean => {
  if (container === null) {
    return true;
  }
  if (container.scrollLeft < 10) {
    return true;
  }
  return false;
};

export const isRight = (container: HTMLElement | null): boolean => {
  if (container === null) {
    return true;
  }
  if (
    container.scrollLeft + container.offsetWidth + 1 >
    container.scrollWidth
  ) {
    return true;
  }
  return false;
};

export const scrollToLeft = (container: HTMLElement | null): void => {
  if (container !== null) {
    // container.scrollLeft -= scrollOffset;
    container.scrollTo({
      left: container.scrollLeft - scrollOffset,
      behavior: 'smooth'
    });
  }
};

export const scrollToRight = (container: HTMLElement | null): void => {
  if (container !== null) {
    // container.scrollLeft += scrollOffset;
    container.scrollTo({
      left: container.scrollLeft + scrollOffset,
      behavior: 'smooth'
    });
  }
};
