$(document).ready(
    function () {
        //event handlers
        $("#tabs a").click(showTab);
        $("#deliveryDetails").submit(placeOrder);

        //other functions
        function showTab(event) {
           event.preventDefault();
           $(this).tab("show");
        }

        function updateOrder(event)
        {
            event.preventDefault();

            var selectedButton = $("input[name=size]:checked");
            var checkedBoxesMeat = $("input[name=meat]:checked");
            var checkedBoxesVeg = $("input[name=veg]:checked");

            //how many boxes are checked
            var numSelected = checkedBoxes.length;
        }

        function placeOrder(event)
        {
            event.preventDefault();


            //when form is submitted
            var subtotal = 0;
            var productSummary = "";
            var selectedButton = $("input[name=size]:checked");
            var checkedBoxesMeat = $("input[name=meat]:checked");
            var checkedBoxesVeg = $("input[name=veg]:checked");

            //Get cost for subtotal
            subtotal = selectedButton.data("cost");

            checkedBoxesMeat.each(function() {
                //loop over all checkboxes to add up price
                subtotal += $(this).data("price");
                productSummary += $(this).val();
                productSummary += " ";
            });

            checkedBoxesVeg.each(function() {
                //loop over all checkboxes to add up price
                subtotal += $(this).data("price");
                productSummary += $(this).val();
                productSummary += " ";
            });

            //calculations

            //selected radio button with name="size"
            var selectedButton = $("input[name=size]:checked");

            //selected checkbox meat
            var checkedBoxesMeat = $("input[name=meat]:checked");

            //selected checkbox veggies
            var checkedBoxesVeg = $("input[name=veg]:checked");

            //calculations for subtotal
            //var subtotal = selectedButton.data("size") + checkedBoxes.data("meat") + checkedBoxes("veg");

            //calculated tax
            var calculatedTax = subtotal * .051;

            var deliveryFee = 2

            //Final Cost
            var totalCost = subtotal + calculatedTax + deliveryFee;


            //Output Elements
            $("#firstNameConfirmation").text($("#firstName").val());
            $("#lastNameConfirmation").text($("#lastName").val());
            $("#deliveryAddressConfirmation").text($("#streetAddress").val());
            $("#cityConfirmation").text($("#city").val());
            $("#stateConfirmation").text($("#state").val());
            $("#zipConfirmation").text($("#zipCode").val());
            $("#phoneNumberConfirmation").text($("#phoneNumber").val());
            $("#subtotal").text(subtotal.toFixed(2));
            $("#calculatedTax").text(calculatedTax.toFixed(2));
            $("#deliveryFee").text(deliveryFee.toFixed(2));
            $("#totalCost").text(totalCost.toFixed(2));
        }








    }
);