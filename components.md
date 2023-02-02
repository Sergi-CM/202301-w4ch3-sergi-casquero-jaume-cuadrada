# DATA

## DATA LAYER

- Phone number
- Is calling (boolean)

## DATA MODIFICATIONS

- Add digit to phone number
- Clear phone number
- Set 'Is calling' (true)
- Set 'Is calling' (false)

# COMPONENTS

## PROVIDER (CONTEXT)

- Contains the function to add a number
- Contains the function to clear the whole number
- Contains the function to call
- Contains the function to hang up
- Contains the 'isCalling'

## APP

## INFO

- Receives the 'is calling' status
- Shows 'Calling..' when 'isCalling' is true

## DISPLAY

- Receives the phone number
- Shows the phone number

## ACTIONS

- Receives the 'isCalling'
- Shows one action button or the other depending on 'isCalling'

## ACTION

- One of the 'Action' components takes the function to call
- One of the 'Action' components takes the function to hung up

## KEYBOARD

- Receives the 'is calling'

## KEY

- Receives the function to add a number
- Receives the function to clear the whole number
