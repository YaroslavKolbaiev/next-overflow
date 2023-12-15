'use client';
import { useToast } from '@/components/ui/use-toast';

export function Toast() {
  const { toast } = useToast();

  return toast({
    variant: 'destructive',
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
  });
}
