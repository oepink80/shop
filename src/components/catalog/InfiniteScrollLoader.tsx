import * as React from 'react';
import { useCallback, useRef } from 'react';

interface InfiniteScrollProps {
  isLoadingMore: boolean;
  pageSize: number;
  setPageSize: (newSize: number) => void;
  loadMoreItems: () => void;
}

export default function InfiniteScrollLoader(props: InfiniteScrollProps) {
  const { loadMoreItems } = props;
  const observerTargetRef = useRef<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        loadMoreItems();
      }
    },
    [loadMoreItems],
  );

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.1,
    });

    if (observerTargetRef.current) {
      observer.observe(observerTargetRef.current);
    }

    return () => observer.disconnect();
  }, [handleIntersection]);

  return <div ref={observerTargetRef}></div>;
}
