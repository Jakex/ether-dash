import React, { ReactNode } from 'react';
import { styled, keyframes } from '@stitches/react';
import { violet, blackA, red, mauve, green, gray } from '@radix-ui/colors';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
});

const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA12,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(AlertDialogPrimitive.Content, {
  backgroundColor: '#2b2b2b',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&:focus': { outline: 'none' },
});

// @ts-ignore
function Content({ children, ...props }) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay  />
      <StyledContent {...props}>{children}</StyledContent>
    </AlertDialogPrimitive.Portal>
  );
}

const StyledTitle = styled(AlertDialogPrimitive.Title, {
  margin: 0,
  color: gray.gray8,
  fontSize: 17,
  fontWeight: 500,
});

const StyledDescription = styled(AlertDialogPrimitive.Description, {
  marginBottom: 20,
  color: mauve.mauve10,
  fontSize: 15,
  lineHeight: 1.5,
});

// Exports
export const AlertDialog = AlertDialogPrimitive.Root;
export const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
export const AlertDialogContent = Content;
export const AlertDialogTitle = StyledTitle;
export const AlertDialogDescription = StyledDescription;
export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;


const Flex = styled('div', { display: 'flex' });

const Button = styled('button', {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      linear: {
        backgroundColor: '#404040',
        color: gray.gray9,
        boxShadow: `0 2px 2px #454545`,
        '&:hover': { backgroundColor: '#474747' },
      },
      green: {
        backgroundColor: green.green10,
        color: mauve.mauve1,
        '&:hover': { backgroundColor: green.green9 },
        '&:focus': { boxShadow: `0 0 0 0px ${green.green10}` },
      },
      mauve: {
        backgroundColor: mauve.mauve4,
        color: mauve.mauve11,
        '&:hover': { backgroundColor: mauve.mauve5 },
        '&:focus': { boxShadow: `0 0 0 2px ${mauve.mauve7}` },
      },
      
    },
  },

  defaultVariants: {
    variant: 'mauve',
  },
});

const AlertButton = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button>Sign in with Discord</Button>
    </AlertDialogTrigger>
    <AlertDialogContent >
      <AlertDialogTitle>You are about to be redirected!</AlertDialogTitle>
      <AlertDialogDescription>
        You will be redirected to {`Discord's`} Authentication page
        to sign in.
      </AlertDialogDescription>
      <Flex css={{ justifyContent: 'flex-end' }}>
        <AlertDialogCancel asChild>
          <Button variant="linear" css={{ marginRight: 15 }}>
            Cancel
          </Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild>
          <Button variant="green">Redirect & Sign In</Button>
        </AlertDialogAction>
      </Flex>
    </AlertDialogContent>
  </AlertDialog>
);

export const ConstructedButton = AlertButton;
