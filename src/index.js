import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import "bootstrap"
import "bootstrap-datepicker"
// import "yubinbango-core"
// import * as gl from "yubinbango-core" 
import Core from './postal'

$(".date-picker").datepicker()

export function getAddress(e) {
  // prevent submit this form
  e = e.preventDefault()
  const postCode = $('#post').val()
  new Core(postCode, fillinAddress)
  return false
}

function fillinAddress(address) {
  if (address) {
    $('#region').val(address.region_id)
    $('#address1').val(`${address.locality} ${address.street}`)
  }
  // TODO handle error
}