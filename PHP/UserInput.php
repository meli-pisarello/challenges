<?php
# The user interface contains two types of user input controls: TextInput, which accepts all texts and NumericInput,which accepts only digits.
# Implement the class TextInput that contains:
# - Public function add($text) - adds the given text to the current value.
# - Public function getValue() - returns the current value (string).
# Implement the class NumericInput that:
# - Inherits from TextInput.
# - Overrides the add method so that each non-numeric text is ignored.


    class TextInput {
        protected string $text = '';

        public function add(string $text): void {
            $this->text .= $text;
        }

        public function getValue(): string {
            return $this->text;
        }
    }

    class NumericInput extends TextInput {
        public function add(string $text): void {
            if (is_numeric($text)) {
                $this->text .= $text;
            }
        }
    }

    # For example, the following test should pass:
    $input = new NumericInput();
    $input->add('1');
    $input->add('a');
    $input->add('0');
    echo $input->getValue() === '10' ? 'TEST PASSES' : 'TEST FAILED';
?>