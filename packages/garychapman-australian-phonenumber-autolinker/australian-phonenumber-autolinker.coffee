class AustralianPhoneNumberParser
  constructor: (message) ->

    if _.trim message.html

      matches = []

      # match every 1800, 1900, 1902, 1300, 13, std/local and mobile number
      # see https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers#Australia
      message.html = message.html.replace(/\b((1800|1900|1902|1300)[\ -]?\d{3}[\ -]?\d{3})\b|(\(?(0[2|3|7|8]{1}\)?[\ -]?)?[3-9]\d{3}[\ -]?\d{4})\b|\b(13(([\ -]?\d{2}[\ -]?\d{2})|\d{1}[\ -]?\d{3}))\b|\b(04\d{2}[\ -]?\d{3}[\ -]?\d{3})\b/mgi,
        (match) ->
      	  if !!match and !matches.findOneof 
            return "<a href='tel:#{match.trim()}'>#{match.trim()}</a>"
      )

    return message

RocketChat.callbacks.add 'renderMessage', AustralianPhoneNumberParser
