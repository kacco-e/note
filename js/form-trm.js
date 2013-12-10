function IsSingleByteChar(Char) {
  var S = escape(Char);
  if (S == Char) return true;
  else if (S.length == 3)
  {
    code = S.charAt(1) + S.charAt(2);
    nm = parseInt(code, 16);
    if (nm > 0 && nm < 127) return true;
  }
}

function Trim800(txt) {
  j = 0;
  str = '';
  for(i = 0; i < txt.length; i++)
  {
    S = txt.charAt(eval( i ));
    if (IsSingleByteChar(S) == true)
    {
      j ++;
      if (escape(S) == "%0D")
        {
          j =j-(j % 800);
          str += S;
        } else {
        if (j % 800 == 0 ) str += S+unescape("%0D%0A");
        else str += S;
        }
      } else {
      j += 2;
      if (j % 800 == 0 ) str += S+unescape("%0D%0A");
      else if ((j-1) % 800 == 0) str += S+unescape("%0D%0A");
      else str += S;
    }
  }
  document.forms[0].elements[0].value = str; // elementsは任意
}



<input type="submit" value="送信" onClick="Trim800(document.forms[0].elements[0].value)"/>