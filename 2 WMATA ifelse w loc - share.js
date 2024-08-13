{
  "always_run_in_app" : false,
  "icon" : {
    "color" : "yellow",
    "glyph" : "magic"
  },
  "name" : "2 WMATA ifelse w loc - share",
  "script" : "\/\/ INITIALIZE WIDGET ----\nconst widget = new ListWidget()\n\n\n\/\/ LIST OF DICTIONARIES FOR UPCOMING ARRIVALS AT VA SQUARE ----\nconst req = new Request(\"https:\/\/api.wmata.com\/StationPrediction.svc\/json\/GetPrediction\/x\") \/\/ x at end is the code for your stop\nconst loc_name = \"*STOP NAME HERE*\" \/\/write this so location stack at end has location\nreq.headers = {\"api_key\": \"y\"} \/\/ y is your API key\nconst res = await req.loadJSON()\nconst trains = res[\"Trains\"]\n\/\/ console.log(trains)\n\n\n\/\/ IF NO TRAINS RUNNING\nif (trains.length == 0){\n  const stack_zero = widget.addStack()\n  stack_zero.addSpacer(50)\n  stack_zero.addText(\"There are no trains in service.\")\n}\n\n\n\/\/ ADD STACKS ----\n\/\/ TRAIN ONE ----\nif (trains.length >= 1){\n\/\/ GET INFO\nconst trains_one = trains[0]\nconst trains_one_line = trains_one[\"Line\"]\nconst trains_one_dest = trains_one[\"DestinationName\"]\nconst trains_one_min = trains_one[\"Min\"]\n\n\/\/ ADD STACK\nconst stack_one = widget.addStack()\n\n\/\/ LINE\nstack_one.addSpacer(50)\nlet trains_one_line_box = stack_one.addText(\"■ \")\nif (trains_one_line == \"OR\") {\n  trains_one_line_box.textColor = Color.orange()\n} else if (trains_one_line == \"SV\") {\n  trains_one_line_box.textColor = Color.gray()\n} else if (trains_one_line == \"RD\") {\n  trains_one_line_box.textColor = Color.red()\n} else if (trains_one_line == \"BL\") {\n  trains_one_line_box.textColor = Color.blue()\n} else if (trains_one_line == \"YL\") {\n  trains_one_line_box.textColor = Color.yellow()\n} else if (trains_one_line == \"GR\") {\n  trains_one_line_box.textColor = Color.green()\n} else {\n  trains_one_line_box.textColor = Color.black()\n}\n\n\/\/ OTHER INFO\n\/\/ stack_one.addText(trains_one_line)\nstack_one.addText(trains_one_dest)\nstack_one.addSpacer()\nstack_one.addText(trains_one_min)\nstack_one.addSpacer(50)\n\/\/ stack_one.borderColor = Color.orange()\n\/\/ stack_one.borderWidth = 2\n\n}\n\n\n\n\/\/ TRAIN TWO ----\nif (trains.length >= 2){\n\/\/ GET INFO\nconst trains_two = trains[1]\nconst trains_two_line = trains_two[\"Line\"]\nconst trains_two_dest = trains_two[\"DestinationName\"]\nconst trains_two_min = trains_two[\"Min\"]\n\n\/\/ ADD STACK\nconst stack_two = widget.addStack()\n\n\/\/ LINE\nstack_two.addSpacer(50)\nlet trains_two_line_box = stack_two.addText(\"■ \")\nif (trains_two_line == \"OR\") {\n  trains_two_line_box.textColor = Color.orange()\n} else if (trains_two_line == \"SV\") {\n  trains_two_line_box.textColor = Color.gray()\n} else if (trains_two_line == \"RD\") {\n  trains_two_line_box.textColor = Color.red()\n} else if (trains_two_line == \"BL\") {\n  trains_two_line_box.textColor = Color.blue()\n} else if (trains_two_line == \"YL\") {\n  trains_two_line_box.textColor = Color.yellow()\n} else if (trains_two_line == \"GR\") {\n  trains_two_line_box.textColor = Color.green()\n} else {\n  trains_two_line_box.textColor = Color.black()\n}\n\n\/\/ OTHER INFO\nstack_two.addText(trains_two_dest)\nstack_two.addSpacer()\nstack_two.addText(trains_two_min)\nstack_two.addSpacer(50)\n\n}\n\n\n\n\/\/ TRAIN THREE ----\nif (trains.length >= 3){\n\/\/ GET INFO\nconst trains_three = trains[2]\nconst trains_three_line = trains_three[\"Line\"]\nconst trains_three_dest = trains_three[\"DestinationName\"]\nconst trains_three_min = trains_three[\"Min\"]\n\n\/\/ ADD STACK\nconst stack_three = widget.addStack()\n\n\/\/ LINE\nstack_three.addSpacer(50)\nlet trains_three_line_box = stack_three.addText(\"■ \")\nif (trains_three_line == \"OR\") {\n  trains_three_line_box.textColor = Color.orange()\n} else if (trains_three_line == \"SV\") {\n  trains_three_line_box.textColor = Color.gray()\n} else if (trains_three_line == \"RD\") {\n  trains_three_line_box.textColor = Color.red()\n} else if (trains_three_line == \"BL\") {\n  trains_three_line_box.textColor = Color.blue()\n} else if (trains_three_line == \"YL\") {\n  trains_three_line_box.textColor = Color.yellow()\n} else if (trains_three_line == \"GR\") {\n  trains_three_line_box.textColor = Color.green()\n} else {\n  trains_three_line_box.textColor = Color.black()\n}\n\n\/\/ OTHER INFO\nstack_three.addText(trains_three_dest)\nstack_three.addSpacer()\nstack_three.addText(trains_three_min)\nstack_three.addSpacer(50)\n\n}\n\n\n\n\/\/ TRAIN FOUR ----\nif (trains.length >= 4){\n\/\/ GET INFO\nconst trains_four = trains[3]\nconst trains_four_line = trains_four[\"Line\"]\nconst trains_four_dest = trains_four[\"DestinationName\"]\nconst trains_four_min = trains_four[\"Min\"]\n\n\/\/ ADD STACK\nconst stack_four = widget.addStack()\n\n\/\/ LINE\nstack_four.addSpacer(50)\nlet trains_four_line_box = stack_four.addText(\"■ \")\nif (trains_four_line == \"OR\") {\n  trains_four_line_box.textColor = Color.orange()\n} else if (trains_four_line == \"SV\") {\n  trains_four_line_box.textColor = Color.gray()\n} else if (trains_four_line == \"RD\") {\n  trains_four_line_box.textColor = Color.red()\n} else if (trains_four_line == \"BL\") {\n  trains_four_line_box.textColor = Color.blue()\n} else if (trains_four_line == \"YL\") {\n  trains_four_line_box.textColor = Color.yellow()\n} else if (trains_four_line == \"GR\") {\n  trains_four_line_box.textColor = Color.green()\n} else {\n  trains_four_line_box.textColor = Color.black()\n}\n\n\/\/ OTHER INFO\nstack_four.addText(trains_four_dest)\nstack_four.addSpacer()\nstack_four.addText(trains_four_min)\nstack_four.addSpacer(50)\n\n}\n\n\n\n\/\/ TRAIN FIVE ----\nif (trains.length >= 5){\n\/\/ GET INFO\nconst trains_five = trains[4]\nconst trains_five_line = trains_five[\"Line\"]\nconst trains_five_dest = trains_five[\"DestinationName\"]\nconst trains_five_min = trains_five[\"Min\"]\n\n\/\/ ADD STACK\nconst stack_five = widget.addStack()\n\n\/\/ LINE\nstack_five.addSpacer(50)\nlet trains_five_line_box = stack_five.addText(\"■ \")\nif (trains_five_line == \"OR\") {\n  trains_five_line_box.textColor = Color.orange()\n} else if (trains_five_line == \"SV\") {\n  trains_five_line_box.textColor = Color.gray()\n} else if (trains_five_line == \"RD\") {\n  trains_five_line_box.textColor = Color.red()\n} else if (trains_five_line == \"BL\") {\n  trains_five_line_box.textColor = Color.blue()\n} else if (trains_five_line == \"YL\") {\n  trains_five_line_box.textColor = Color.yellow()\n} else if (trains_five_line == \"GR\") {\n  trains_five_line_box.textColor = Color.green()\n} else {\n  trains_five_line_box.textColor = Color.black()\n}\n\n\/\/ OTHER INFO\nstack_five.addText(trains_five_dest)\nstack_five.addSpacer()\nstack_five.addText(trains_five_min)\nstack_five.addSpacer(50)\n\n}\n\n\n\/\/ LOCATION ----\nconst stack_loc = widget.addStack()\nconst loc = widget.addText(loc_name)\nloc.font = Font.systemFont(14)\nloc.rightAlignText()\n\n\n\/\/ ADD LAST REFRESH TIME ----\nconst stack_time = widget.addStack()\nconst t = new Date()\nconst m = t.getMonth() + 1\nconst d = t.getDate()\nconst y = t.getFullYear()\nconst h_raw = t.getHours()\nconst mi_raw = t.getMinutes()\n\n\n\/\/ TWELVE HOUR CLOCK\nif (h_raw == 0) {\n  h = 12\n} else if (h_raw > 12) {\n  h = h_raw - 12\n\/\/   to have leading zero on hour, need to make above h_int = h_raw - 12\n\/\/   if (h_int < 10) {\n\/\/     h = \"0\" + h_int.toString()\n\/\/   } else {\n\/\/     h = h_int\n\/\/   }\n} else {\n  h = h_raw\n}\n\n\/\/ MINUTES UNDER TEN W LEADING ZEROS\nif (mi_raw < 10) {\n  mi = \"0\" + mi_raw.toString()\n} else {\n  mi = mi_raw\n}\n\n\/\/ AM OR PM\nif (h_raw < 12) {\n  ampm = \"am\"\n} else {\n  ampm = \"pm\"\n}\n\nconst last_refresh_clean = m + \"\/\" + d + \"\/\" + y + \" @ \" + h + \":\" + mi + ampm\n\n\/\/ stack_time.addSpacer()\nconst last_refresh = widget.addText(last_refresh_clean)\nlast_refresh.font = Font.systemFont(14)\nlast_refresh.rightAlignText()\n\n\n\/\/ REFRESH LATER ----\n\/\/ Refresh at 7:02am next day\nconst tomorrow = new Date(t)\ntomorrow.setDate(t.getDate() + 1)\ntomorrow.setHours(7,1,0)\nwidget.refreshAfterDate = tomorrow\n\/\/ I don’t think this fully works (seems to refres at 9:something am), but stops constant refreshing, so it's fine\n\n\n\/\/ DONE ----\nScript.setWidget(widget)\nScript.complete()\n\n",
  "share_sheet_inputs" : [

  ]
}